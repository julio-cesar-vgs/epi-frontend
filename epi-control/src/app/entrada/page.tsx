import Navbar from '../../components/Navbar';
import {Input, Button} from "@nextui-org/react";

export default function Entrada() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Entrada de EPI</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <Input type="text" label="Responsável" />
        <Input type="text" label="Setor" />
        <Input type="text" label="Código do Produto" />
        <Input type="text" label="Nome" />
        <Input type="text" label="Tipo" />
        <Input type="date" label="Data de Devolução" />
        <Button color="primary">Registrar Entrada</Button>
      </form>
    </main>
  );
}
