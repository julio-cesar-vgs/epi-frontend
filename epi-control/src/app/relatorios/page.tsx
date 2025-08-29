import Navbar from '../../components/Navbar';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const mockData = [
  {
    id: 1,
    responsavel: "João Silva",
    setor: "Manutenção",
    codigo: "EPI001",
    nome: "Capacete",
    tipo: "Segurança",
    dataSolicitacao: "2024-07-27",
    prazoDevolucao: "2024-08-27",
    permanente: false,
    status: "Emprestado"
  },
  {
    id: 2,
    responsavel: "Maria Santos",
    setor: "Produção",
    codigo: "EPI002",
    nome: "Luvas",
    tipo: "Proteção",
    dataSolicitacao: "2024-07-27",
    prazoDevolucao: "",
    permanente: true,
    status: "Permanente"
  },
];

export default function Relatorios() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Relatório de EPIs</h1>
      <Table aria-label="Tabela de EPIs">
        <TableHeader>
          <TableColumn>Responsável</TableColumn>
          <TableColumn>Setor</TableColumn>
          <TableColumn>Código</TableColumn>
          <TableColumn>Nome</TableColumn>
          <TableColumn>Tipo</TableColumn>
          <TableColumn>Data da Solicitação</TableColumn>
          <TableColumn>Prazo de Devolução</TableColumn>
          <TableColumn>Permanente</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableHeader>
        <TableBody>
          {mockData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.responsavel}</TableCell>
              <TableCell>{item.setor}</TableCell>
              <TableCell>{item.codigo}</TableCell>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.tipo}</TableCell>
              <TableCell>{item.dataSolicitacao}</TableCell>
              <TableCell>{item.prazoDevolucao}</TableCell>
              <TableCell>{item.permanente ? "Sim" : "Não"}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
