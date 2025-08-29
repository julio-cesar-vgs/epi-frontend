import Navbar from '../../components/Navbar';
import {Input, Button, Checkbox} from "@nextui-org/react";

export default function Saida() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Saída de EPI</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <Input type="text" label="Código do Produto" />
        <Input type="text" label="Quem Devolveu" />
        <Checkbox>Permanente</Checkbox>
        <Button color="primary">Registrar Saída</Button>
      </form>
    </main>
  );
}
