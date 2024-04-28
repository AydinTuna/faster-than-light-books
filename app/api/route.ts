// api/upload/route.ts
import { NextResponse, NextRequest } from "next/server";
import path from "path";

import { writeFile } from "fs/promises";


export async function POST(req: NextRequest, res: NextResponse) {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    console.log(file);
    try {
        // Burada dosyanın işlenmesi ve kaydedilmesi gerekiyor.
        // Dosyayı public/assets/ klasörüne kaydetmek için gerekli adımları ekleyin.
        await writeFile(
            path.join(process.cwd(), "public/assets/" + file.name),
            buffer
        );
        return NextResponse.json({ Message: "Success", status: 201 });
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ Message: "Failed", status: 500 });
    }
};
