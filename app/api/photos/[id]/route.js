import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, { params: paramsPromise }) {
  const { id } = await paramsPromise;
  const data = await getPhotoById(id);

  return NextResponse.json(JSON.parse(JSON.stringify(data)));
}
