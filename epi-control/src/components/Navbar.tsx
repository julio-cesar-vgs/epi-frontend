'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Controle de EPI</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Início
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/entrada" aria-current="page">
            Entrada
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/saida">
            Saída
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/relatorios">
            Relatórios
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
