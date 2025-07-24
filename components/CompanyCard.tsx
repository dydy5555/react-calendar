"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image, button } from "@nextui-org/react";
import NavBar from "./NavBar";

export default function CompanyCard() {
  const appList = [
    {
      name: "Orange",
      img: "https://i.pinimg.com/originals/89/24/a5/8924a56b52ed4f29259641ba2d1ef115.jpg",
      id: "1",
    },
    {
      name: "Tangerine",
      img: "https://i.pinimg.com/originals/84/b7/9e/84b79e70228165bc11333db85c81c2b1.jpg",
      id: "2",
    },
    {
      name: "Raspberry",
      img: "https://i.pinimg.com/originals/71/84/64/7184648cb823a8e0968458ddb089c5ea.jpg",
      id: "3",
    },
    {
      name: "Lemon",
      img: "https://i.pinimg.com/originals/e3/b2/73/e3b273bf796f30b235373cb5519ab01a.jpg",
      id: "4",
    },
    {
      name: "Avocado",
      img: "https://i.pinimg.com/originals/c6/96/03/c696030eac446f4e33f2d9029ac3ca8f.jpg",
      id: "5",
    },
    {
      name: "Lemon 2",
      img: "https://i.pinimg.com/originals/66/ba/2d/66ba2dd5f0fb136419773b82adb48983.jpg",
      id: "6",
    },
    {
      name: "Banana",
      img: "https://i.pinimg.com/originals/a3/0a/13/a30a1388ace4a895350821a3bc3afd34.jpg",
      id: "7",
    },
    {
      name: "Watermelon",
      img: "https://i.pinimg.com/originals/51/ef/0b/51ef0b92462b0d695ac0aba9608705e5.jpg",
      id: "8",
    },
    {
      name: "Orange",
      img: "https://i.pinimg.com/originals/89/24/a5/8924a56b52ed4f29259641ba2d1ef115.jpg",
      id: "1",
    },
    {
      name: "Tangerine",
      img: "https://i.pinimg.com/originals/84/b7/9e/84b79e70228165bc11333db85c81c2b1.jpg",
      id: "2",
    },
    {
      name: "Raspberry",
      img: "https://i.pinimg.com/originals/71/84/64/7184648cb823a8e0968458ddb089c5ea.jpg",
      id: "3",
    },
    {
      name: "Lemon",
      img: "https://i.pinimg.com/originals/e3/b2/73/e3b273bf796f30b235373cb5519ab01a.jpg",
      id: "4",
    },
    {
      name: "Avocado",
      img: "https://i.pinimg.com/originals/c6/96/03/c696030eac446f4e33f2d9029ac3ca8f.jpg",
      id: "5",
    },
    {
      name: "Lemon 2",
      img: "https://i.pinimg.com/originals/66/ba/2d/66ba2dd5f0fb136419773b82adb48983.jpg",
      id: "6",
    },
    {
      name: "Banana",
      img: "https://i.pinimg.com/originals/a3/0a/13/a30a1388ace4a895350821a3bc3afd34.jpg",
      id: "7",
    },
    {
      name: "Watermelon",
      img: "https://i.pinimg.com/originals/51/ef/0b/51ef0b92462b0d695ac0aba9608705e5.jpg",
      id: "8",
    },
    {
      name: "Orange",
      img: "https://i.pinimg.com/originals/89/24/a5/8924a56b52ed4f29259641ba2d1ef115.jpg",
      id: "1",
    },
    {
      name: "Tangerine",
      img: "https://i.pinimg.com/originals/84/b7/9e/84b79e70228165bc11333db85c81c2b1.jpg",
      id: "2",
    },
    {
      name: "Raspberry",
      img: "https://i.pinimg.com/originals/71/84/64/7184648cb823a8e0968458ddb089c5ea.jpg",
      id: "3",
    },
    {
      name: "Lemon",
      img: "https://i.pinimg.com/originals/e3/b2/73/e3b273bf796f30b235373cb5519ab01a.jpg",
      id: "4",
    },
    {
      name: "Avocado",
      img: "https://i.pinimg.com/originals/c6/96/03/c696030eac446f4e33f2d9029ac3ca8f.jpg",
      id: "5",
    },
    {
      name: "Lemon 2",
      img: "https://i.pinimg.com/originals/66/ba/2d/66ba2dd5f0fb136419773b82adb48983.jpg",
      id: "6",
    },
    {
      name: "Banana",
      img: "https://i.pinimg.com/originals/a3/0a/13/a30a1388ace4a895350821a3bc3afd34.jpg",
      id: "7",
    },
    {
      name: "Watermelon",
      img: "https://i.pinimg.com/originals/51/ef/0b/51ef0b92462b0d695ac0aba9608705e5.jpg",
      id: "8",
    },
    {
      name: "Orange",
      img: "https://i.pinimg.com/originals/89/24/a5/8924a56b52ed4f29259641ba2d1ef115.jpg",
      id: "1",
    },
    {
      name: "Tangerine",
      img: "https://i.pinimg.com/originals/84/b7/9e/84b79e70228165bc11333db85c81c2b1.jpg",
      id: "2",
    },
    {
      name: "Raspberry",
      img: "https://i.pinimg.com/originals/71/84/64/7184648cb823a8e0968458ddb089c5ea.jpg",
      id: "3",
    },
    {
      name: "Lemon",
      img: "https://i.pinimg.com/originals/e3/b2/73/e3b273bf796f30b235373cb5519ab01a.jpg",
      id: "4",
    },
  ];
  return (
    <div className="">
      <div className="shadow-sm px-20 py-2">
        <NavBar></NavBar>
      </div>
        <div className="px-20">
          <h1 className="font-semibold text-2xl py-5">Application</h1>
        </div>
      <div className="mx-32 my-5">
        <div className=" w-full  gap-[80px] grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 flex-wrap">
          {appList.map((item, index) => (
            <Card        
              className=""    
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                 
                  alt={item.name}
                  className="w-full h-[200px] object-cover opacity-100 rounded-[10px] "
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-start py-5">
                <b>{item.name}</b>
                {/* <p className="text-default-500">{item.id}</p> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
