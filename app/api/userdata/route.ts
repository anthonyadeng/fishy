import { type NextRequest } from 'next/server';
export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: NextRequest) {
  //   const res = await getTodos();
  //   //   const data = await res.json();

  return Response.json('test');
}
