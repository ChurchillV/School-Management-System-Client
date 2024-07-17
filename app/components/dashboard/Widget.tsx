type WidgetProps = {
    widgetIcon : React.ReactNode
    widgetTitle : string
    widgetdata : number
    routes : object
}

const Widget : React.FC<WidgetProps> = ({widgetIcon, widgetTitle, widgetdata, routes}) => {
    return ( 
        <div className="flex flex-col p-5 bg-widget-primary border border-widget-border rounded-2xl">
            <div className="flex flex-row justify-between items-center">
                <div className="mr-12">
                    {widgetTitle}
                </div>
                <div className="bg-widget-border rounded-full p-2">
                    {widgetIcon}
                </div>
            </div>

            <div className="text-6xl text-center mt-3">
                {widgetdata}
            </div>

            <div className="flex flex-row justify-between gap-10 items-center mt-10">
                <div>
                    <button className="rounded-xl bg-white border border-widget-border hover:bg-widget-primary-hovered px-5 py-3">See all</button>
                </div>
                <div>
                    <button className="rounded-xl bg-primary hover:bg-primary-hovered text-white px-5 py-3">Add {widgetTitle}</button>
                </div>
            </div>
        </div>
     );
}
 
export default Widget;