import { CatalogueCardProps } from "../components/cards/CatalogueCard";
import {
  DevicePhoneMobileIcon,
  WindowIcon,
  WalletIcon,
  TableCellsIcon,
  ShareIcon,
  ShoppingCartIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import { HistoryCardProps } from "../components/cards/HistoryCard";

export const dummyCatalogueData: CatalogueCardProps[] = [
  {
    title: "Mobile",
    description: "The debt is $21.00",
    Icon: DevicePhoneMobileIcon,
  },
  {
    title: "Laptop",
    description: "The debt is $120.00",
    Icon: WindowIcon,
  },
  {
    title: "Gaming Console",
    description: "The debt is $85.50",
    Icon: WalletIcon,
  },
  {
    title: "Smartwatch",
    description: "The debt is $30.75",
    Icon: TableCellsIcon,
  },
];

export const DummyHistoryData: HistoryCardProps[] = [
  {
    title: "Card to Card",
    description: "Maria",
    Icon: ShareIcon,
    amount: "+$143",
    bgColor: "#E8528C",
  },
  {
    title: "Shopping",
    description: "Online",
    Icon: ShoppingCartIcon,
    amount: "-$467",
    bgColor: "#EC9A2F",
  },
  {
    title: "Apple Musci",
    description: "Online",
    Icon: MusicalNoteIcon,
    amount: "-$43",
    bgColor: "#246EF1",
  },
  {
    title: "Scale",
    description: "Service",
    Icon: MusicalNoteIcon,
    amount: "-$467",
    bgColor: "#EC9A2F",
  },
  {
    title: "Card to Card",
    description: "service",
    Icon: ShareIcon,
    amount: "-$2467",
    bgColor: "#E8528C",
  },
];
