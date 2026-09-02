import { ImageResponse } from "next/og";

// Next.js dosya kuralı: bu dosya varlığı otomatik olarak
// <meta property="og:image" ...> etiketini üretir — sosyal medyada
// (WhatsApp, X, LinkedIn) link paylaşıldığında görünen kart. Önceden HİÇ
// yoktu (boş/varsayılan kart görünüyordu) — bkz. seo-audit bulgusu G2.
//
// Satori (ImageResponse'un motoru) karmaşık SVG'leri (gradyan/gruplu
// path) güvenilir render edemiyor, bu yüzden logo dosyasını gömmek
// yerine site tokenlarıyla (koyu zemin + altın vurgu) sade, metin
// ağırlıklı bir kart kuruluyor — marka rengiyle tutarlı ama Satori'nin
// güvenle çizebileceği primitifler (div/span, flex, düz renk).
export const alt = "DenizliKuyumcu.com — Denizli'de Güncel Altın ve Döviz Fiyatları";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadInter(weight: 400 | 700) {
  // next/font/google build sırasında bunu zaten indiriyor; burada da
  // aynı CDN'den (Google Fonts) doğrudan çekiyoruz — ImageResponse kendi
  // izole render bağlamında çalıştığı için next/font'un çıktısını
  // paylaşamıyor, resmi Next.js örneklerindeki desen bu.
  //
  // ÖNEMLİ: "text=" ile alt küme İSTEME (daha önce denendi, hataya yol
  // açtı) — Google Fonts sadece o parametredeki karakterleri içeren dar
  // bir alt küme döndürüyor; render edilen metindeki HERHANGİ bir
  // karakter o listede yoksa (ör. büyük "G", "p", "k") o karakter için
  // glif bulunamıyor ve satır içinde farklı bir yedek fonta düşülüyor —
  // sonuç, aynı kelime içinde karışık kalınlıkta/fontta harfler. Tam
  // font dosyasını istemek bunu tamamen ortadan kaldırıyor.
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`
  ).then((res) => res.text());
  // Google Fonts, text= parametresi olmadan BİRDEN FAZLA @font-face bloğu
  // döndürür (latin, latin-ext, vietnamese, ...) — her biri farklı bir
  // unicode-range için. Türkçe'ye özgü karakterler (ı, ğ, ş, İ, Ğ, Ş)
  // "latin-ext" bloğunda; sadece ilk bloğu (genelde salt "latin") almak
  // bu karakterleri eksik bırakıp yedek fonta düşülmesine yol açıyordu
  // (önceki hata — bkz. yukarıdaki text= notu). Bu yüzden "latin-ext"
  // içeren bloğu özellikle arıyoruz.
  const blocks = css.split("@font-face").slice(1);
  const latinExtBlock = blocks.find((b) => b.includes("/* latin-ext */"));
  const targetBlock = latinExtBlock ?? blocks[0];
  const fontUrl = targetBlock?.match(/src: url\(([^)]+)\)/)?.[1];
  if (!fontUrl) throw new Error("Font URL bulunamadı");
  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const [interRegular, interBold] = await Promise.all([
    loadInter(400),
    loadInter(700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#11110f",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(227,189,110,0.16), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#e3bd6e",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#a39e93", fontWeight: 400 }}>
            DenizliKuyumcu.com
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 64,
            fontWeight: 700,
            color: "#f5f3ee",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Denizli altın piyasası, tek ekranda.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 30,
            color: "#a39e93",
            maxWidth: 820,
          }}
        >
          Güncel altın ve döviz fiyatları, kuyumcu rehberi.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    }
  );
}
