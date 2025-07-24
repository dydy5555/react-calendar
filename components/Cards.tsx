import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";

export default function Cards() {
  return (
    
      <div className=" flex flex-wrap">
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Card className="py-4 mx-10">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-100"
                src="https://i.pinimg.com/originals/a4/51/18/a4511801c75393147e1ab722a882335f.jpg"
                width={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
          </Card>
        </button>

        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Card className="py-4 mx-10">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-100"
                src="https://i.pinimg.com/originals/f5/a5/da/f5a5da5d0166396a8ea1147256f1b034.jpg"
                width={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
          </Card>
        </button>

        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Card className="py-4 mx-10">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-100"
                src="https://i.pinimg.com/originals/97/2b/eb/972bebc2e72221e5f86847e55d77b7cc.jpg"
                width={270}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
          </Card>
        </button>
      </div>
    
  );
}
