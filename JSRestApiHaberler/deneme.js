const apiKaynakAdresi = "https://api.collectapi.com/news/getNews?country=tr&tag=general";
const apiAyarlari = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "apikey 4dt29quqTUIne0aMPOL4DL:0l849tJwAWlI1Wy5PlP05N"
  }
};

async function haberListele() {
  try {
    const sunucuYaniti = await fetch(apiKaynakAdresi, apiAyarlari);
    const veriler = await sunucuYaniti.json();

    const carouselInner = document.querySelector(".carousel-inner");

    veriler.result.forEach((eleman, index) => {
      const haberItem = document.createElement('div');
      haberItem.classList.add('carousel-item');
      if (index === 0) {
        haberItem.classList.add('active');
      }

      const haberBasligi = document.createElement('h2');
      haberBasligi.textContent = eleman.name;

      const haberMetni = document.createElement('p');
      haberMetni.textContent = eleman.description;

      const haberResmi = document.createElement('img');
      haberResmi.src = eleman.image; // Elemanın resim URL'sini kullan

      haberItem.appendChild(haberBasligi);
      haberItem.appendChild(haberResmi); // Resmi haber öğesine ekle
      haberItem.appendChild(haberMetni);

      carouselInner.appendChild(haberItem);

      // Detayları konsola yazdır
      console.log(JSON.stringify(eleman, null, 2)); // JSON formatında düzenli çıktı
    });
  } catch (error) {
    console.error(error);
  }
}

haberListele();
