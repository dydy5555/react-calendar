"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import { getPhotos, getPosts, getUsers } from "@/services/userServices";

export default function Users() {
  let [apiData, setApiData] = useState(null);
  let [apiPhoto, setApiPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    const fetchData = async () => {
      try {
        getPosts()
          .then((posts) => {
            // console.log('Posts:', posts);
            setApiData(posts);
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
          });

        getPhotos()
          .then((photos) => {
            console.log("Photos:", photos);
            setApiPhoto(photos);
          })

          .catch((error) => {
            console.error("Error fetching photos:", error);
          });
        setIsLoading(false);
      } catch (error) {
        // handle the error as needed
        console.error("An error occurred while fetching the data: ", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Card className="w-[370px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </Card>
    );
  }
  console.log({ apiPhoto });
  console.log({ apiData });
  return (
    <>
      <div className=" flex flex-wrap p-3 gap-10">
        {apiData &&
          apiData.map((item, index) => (
            <Card
              className="w-[370px] shadow-md border p-2 rounded-2xl"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardHeader className="flex gap-3 p-0">
                <Image
                  alt="nextui logo"
                  src="https://i.pinimg.com/originals/0b/a6/ae/0ba6ae72ea50b303f5e473715db7c181.jpg"
                  className="opacity-100 object-cover rounded-full w-[60px] h-[60px] border border-gray-300"
                />
                <div className="flex flex-col">
                  <p className="text-md font-medium">NextUI</p>
                  <p className="text-sm text-default-500">nextui.org</p>
                </div>
              </CardHeader>

              <CardBody className="p-2 w-full" onClick={onOpen}>
                <p className="text-md font-semibold line-clamp-1">
                  {item.title}
                </p>
                <p className="py-1 text-sm line-clamp-3">{item.body}</p>

                {/* {apiPhoto &&
                apiPhoto.map((img) => (
                  <div key={img.id}>
                    <Image
                      alt="Card background"
                      className="object-cover rounded-sm opacity-100 w-[370px] h-[270px] py-1"
                      src={img.url}
                    />
                    {apiPhoto && <img src={apiPhoto.thumbnailUrl} alt="Photo" />}
                  </div>
                ))} */}

                <Image
                  alt="Card background"
                  className="object-cover rounded-sm opacity-100 w-[370px] h-[270px] py-1"
                  src={
                    "https://i.pinimg.com/originals/59/86/8a/59868a2cfe6bdd40f94bf5da32cf085a.jpg"
                  }
                />
              </CardBody>

              <Divider />

              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">4</p>
                  <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">
                    97.1K
                  </p>
                  <p className="text-default-400 text-small">Followers</p>
                </div>
              </CardFooter>
            </Card>
          ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        className="bg-white w-[50%] p-4 z-50 rounded-2xl"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <div className="">
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
