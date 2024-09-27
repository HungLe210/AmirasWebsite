export type ServiceCardItem = {

    img: string,
    title: string,
    detailUrl: string
    className?: string,
}

export type ServiceCardType = {
    category: {
        name: string,
        url: string
    },
    items: ServiceCardItem[],
}