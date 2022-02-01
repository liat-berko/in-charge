import { Injectable, OnDestroy } from '@angular/core';
import { DashboardFilter, DashboardParams, DashboardWidgetsApiService } from '@core';
import { DiscardFiltersService } from '@shared';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import { DashboardWidget } from './dashboard-widget';
import { DASHBOARD_WIDGET_TYPE_MAP } from './widgets/dashboard-widget-type-map';


class DashboardFilterState {
    data: DashboardFilter;

    constructor() {
        this.data = new DashboardFilter();
    }
}

@Injectable({
    providedIn: 'root'
})
export class DashboardService implements OnDestroy {
    behaviorSubject = new BehaviorSubject<DashboardWidget[]>([]);
    private _filterState: DashboardFilterState = new DashboardFilterState();
    private _widgets!: DashboardWidget[];
    // Neat way to handle destruction where needed within a service
    private _destroy$ = new Subject();
    private destroy$ = this._destroy$.asObservable();

    constructor(private dashboardWidgetApiService: DashboardWidgetsApiService,
                private discardFiltersService: DiscardFiltersService) {

        this.discardFiltersService.clean$
            .pipe(
                takeUntil(this.destroy$)
            )
            .subscribe(() => {
                this.clearFilters();
            });
    }

    clearFilters(): void {
        this._filterState = new DashboardFilterState();
    }

    getLocationData(): number[] {
        return this._filterState.data.location;
    }

    setLocationData(value: number[]): void {
        this._filterState.data.location = value;
    }

    getTimeRangeData(): number {
        return this._filterState.data.timeRange;
    }

    setTimeRangeData(value: number): void {
        this._filterState.data.timeRange = value ? value : 7; // default value is 7
    }

    filterOnChange(dataObj: DashboardParams) {
        for (const widget of this._widgets) {
            widget.params.filters = dataObj;
        }
    }

    get widgets() {
        return this._widgets ? of(this._widgets) : this.getEnabledDashboardWidgets();
    }

    private getEnabledDashboardWidgets(): Observable<DashboardWidget[]> {
        return this.dashboardWidgetApiService.fetchDashboardWidgetData().pipe(
            map(res => res.reduce<DashboardWidget[]>((acc, curr) => {
                if (curr.enabled) {
                    acc.push({
                        ...curr,
                        type: DASHBOARD_WIDGET_TYPE_MAP[curr.name],
                        params: {
                            ...curr.params,
                            filters: new DashboardParams()
                        }
                    });
                }

                return acc;
            }, [])),
            tap(res => this._widgets = res)
        );
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
        this.behaviorSubject.unsubscribe();
    }
}
