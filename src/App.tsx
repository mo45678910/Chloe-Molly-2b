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
} from "./components/form"

export default function App() {
  return (
      <div>
        <TitleDemo />
          <IntroDemo />
          <HobbyOneDemo />
          <ListOneDemo />
          <TableOneDemo />
          <FormOneDemo />
      </div>
  )
}
