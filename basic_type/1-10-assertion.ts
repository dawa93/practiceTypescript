{
  // Type assertion ๐ฉ
  // ์ฌ์ฉํ์ง ์๋๊ฒ์ด ์ข๋ค. ๊ทธ๋ฌ๋ ์ฌ์ฉํด์ผ ํ  ๋๋ ์๋ค. ๊ทธ๋๋ ๋ด๊ฐ 100ํผ์ผํธ ์ฅ๋ดํ ๋์ด๋ค!!!

  let func = (): any => {
    return 'hello';
  };
  const result = func();
  // result์ ๋ฆฌํด๊ฐ ํ์์ any์ด์ง๋ง, ๋ด๊ฐ ๋ฌธ์์ด์ ๋ฆฌํดํ๋ ํจ์๊ฐ ์๋ค๋๊ฑธ ์๊ณ  ์์ด์
  // func.length๋ฅผ ์ฌ์ฉํ๊ณ  ์ถ์ง๋ง ์ฌ์ฉํ  ์ ์๋ค. ๊ทธ ์ด์ ๋ ํ์์ด any ์ด๊ธฐ ๋๋ฌธ์ด๋ค.
  // ์ด ๊ฒฝ์ฐ ๋ด๊ฐ 100ํ๋ก ๋ฌธ์์ด๋ง ๋ฆฌํดํ๋ค๋๊ฒ์ ํ์ ํ๋ค๋ฉด type assertion ์ ์ฌ์ฉ ํ  ์ ์๋ค.

  // ์ธ๊ฐ์ง ๋ฐฉ๋ฒ์ด ์๋ค. ์๋์ ์์ ๋ฅผ ๋ณด์.

  // 1) ์ฒซ๋ฒ์งธ ๋ฐฉ๋ฒ (as)
  // result๊ฐ ๋ฌธ์์ด์ธ๊ฒ์ ์๊ณ , ๋ฌธ์์ด์ ๊ฐ๋ฅํ ๋ชจ๋  APIS๋ฅผ ์ฌ์ฉ ํ  ์ ์๋ค.
  let length1 = (result as string).length; // ๐ฉ

  // 2) ๋๋ฒ์งธ ๋ฐฉ๋ฒ  (<>)
  let length2 = (<string>result).length; // ๐ฉ

  // 3) ์ธ๋ฒ์งธ ๋ฐฉ๋ฒ  (!)
  let wrong: any = 5;
  console.log((wrong as number[]).push(1)); // ๐ฉ

  let findNumbers = (): number[] | undefined => {
    return undefined;
  };
  let numbers1 = findNumbers();
  numbers1!.push(1); // ๐ฉ

  let numbers2 = findNumbers()!; // ๐ฉ
  numbers2.push(1);
  let button = document.querySelector('class')!; // ๐ฉ
}
