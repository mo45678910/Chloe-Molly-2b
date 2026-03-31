import {
  TitleDemo
} from "./components/title"

import {
    IntroDemo
} from "./components/intro"
import {
    HobbyOneDemo
} from "./components/hobby1"
import {
    ListOneDemo
} from "./components/list1"
import {
    TableOneDemo
} from "./components/table1.tsx";
import {
    FormOneDemo
} from "./components/form1.tsx"

import {
    Hobby2Demo
} from "./components/hobby2.tsx";

import {
    List2Demo
} from "./components/list2.tsx";

import {
    Table2Demo
} from "./components/table2.tsx";

import {
    FormTwoDemo
} from "./components/form2.tsx";

export default function App() {
  return (
      <div>
        <TitleDemo />
          <IntroDemo />
          < hr/>
          <HobbyOneDemo />
          <ListOneDemo />
          <TableOneDemo />
          <FormOneDemo />
          < hr/>
          <Hobby2Demo />
          <List2Demo />
          <Table2Demo />
          <FormTwoDemo />

      </div>
  )
}
