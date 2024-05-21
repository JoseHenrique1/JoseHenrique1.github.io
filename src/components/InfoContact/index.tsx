import { Mail, MapPin } from "lucide-react";
import { Icon } from "../Icon";

export function InfoContact() {
    return (
        <div className="space-y-6 max-w-lg">
            <h1 className="text-white text-3xl">Drop Me a Message</h1>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto autem voluptatum quam repellendus provident, modi non atque nihil? Fugit dignissimos harum reiciendis quo, ut incidunt aut tenetur perferendis nihil?</p>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <Icon icon={Mail} />
                    <p className="text-white">josehenriquearaujodasilva2@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                    <Icon icon={MapPin} />
                    <p className="text-white">Bom Jesus - PB, Brazil</p>
                </div>
            </div>
        </div>
    );
}

