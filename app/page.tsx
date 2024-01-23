"use client";
import FormComponent from "@/components/form";
import ListComponent from "@/components/list";
import MenuComponent from "@/components/menu";
import { useState } from "react";

export interface ListRecord {
  name: string;
  email: string;
}

export default function Home() {
  const [list, setList] = useState<ListRecord[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const action = (name: string, email: string) => {
    if(name === "" || email === "") return;
    setList([...list, { name, email }]);
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <MenuComponent />
      <h1>Hello World!</h1>

      <FormComponent
        placeholderField1="Name"
        placeholderField2="Email"
        action={() => action(name, email)}
        onChangeField1={onChangeName}
        onChangeField2={onChangeEmail}
      />

      <ListComponent items={list}/>
    </main>
  );
}
