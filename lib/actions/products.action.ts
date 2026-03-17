"use server";
import prisma from "@/lib/prisma";
import { ConvertToJSobject } from "../utils";
import { LIMITED_DISPLAY } from "../constants";

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LIMITED_DISPLAY,
    orderBy: { createdAt: "desc" },
  });

  return ConvertToJSobject(data);
}
