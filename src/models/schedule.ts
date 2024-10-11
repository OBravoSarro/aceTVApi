export interface ScheduleResponse {
    eventsDate: string;
    schedule: Schedule[];
}

interface Schedule {
    hour: string;
    event: string;
    eventDetail: string[];
    links: Link[];
}

interface Link {
    label: string;
    link: string;
}