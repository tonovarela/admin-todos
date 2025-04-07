import { WidgetItem } from "@/components";


export default function Page() {
  return (
    <>
      
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <WidgetItem title="Info 1">
            <h2 className="text-2xl font-bold">Hola mundo</h2>
            </WidgetItem>
          <WidgetItem title="Info 2">
          <h2 className="text-2xl font-bold">Hola mundo</h2>
            </WidgetItem>
          <WidgetItem title="Info 3">
          <h2 className="text-2xl font-bold">Hola mundo</h2>
          </WidgetItem>
          <WidgetItem title="Info 4">
          <h2 className="text-2xl font-bold">Hola mundo</h2>
            </WidgetItem>
        </div>
      
    </>
  );
}