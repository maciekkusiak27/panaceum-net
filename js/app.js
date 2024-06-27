function renderContent(content) {
  document.getElementById("app").innerHTML = content;
}

const panaceumContent = `
<section id="panaceum-page">
  <a href="https://www.facebook.com/share/MPUGVQ3jf5fNMTkd/">
    <img src="./assets/images/webp/koncert.webp" alt="koncert" style="width: 100%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=PLgn-GLCkY0hl8JgWX5Y2dMHGT805_4dzY&si=czeV4kOmq8SZUM2Y">
    <img src="./assets/images/webp/cds/cerber.webp" alt="cerber" style="width: 45%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=PLgn-GLCkY0hmlpXn73DzgqN_-10rf3f7W&si=AGCHI1j7weHUzYCT">
    <img src="./assets/images/webp/cds/cwiercwiekupoezji.webp" alt="cwiercwiekupoezji" style="width: 45%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=OLAK5uy_lYCTgS5opF_poplANBC9upvSmj-oEsXY0&si=z0TS3UIidmZx3uYt">
    <img src="./assets/images/webp/cds/spacerynoca.webp" alt="spacerynoca" style="width: 45%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=PLgn-GLCkY0hniVNbe3Fp0jZLFku9QYYf6&si=FMVVrAXtwBHqUjtO">
    <img src="./assets/images/webp/cds/latoep.webp" alt="latoep" style="width: 45%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=PLgn-GLCkY0hnqepw-Tr_U02AlEadg69Sa&si=4s5VHl6VTYSx6lXo">
    <img src="./assets/images/webp/cds/linianieba2.webp" alt="linianieba2" style="width: 45%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=PLgn-GLCkY0hnWsmIvddCvOfndz7Ar8JCz&si=ZgRAHLKQvD-tL-Qf">
    <img src="./assets/images/webp/cds/linianieba.webp" alt="linianieba" style="width: 45%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=PLgn-GLCkY0hnIzPotisysmK7O5CU5CCPY&si=qyJE-kEEOpDI1acz">
    <img src="./assets/images/webp/cds/dwadopotegi.webp" alt="dwadopotegi" style="width: 45%" loading="lazy">
  </a>
</section>
`;


const musicContent = `
<section id="music-page">
  <iframe src="https://open.spotify.com/embed/album/6VtQu3Dhkg43G4LBIx9aqF?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe src="https://open.spotify.com/embed/album/75DvTU9r4FlWVCRCkgaoUE?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe src="https://open.spotify.com/embed/album/2hFOm064MBHbwzsW6FblOm?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe src="https://open.spotify.com/embed/album/2vpV9LpLbXeiv3R8Dc5Z3b?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  <iframe src="https://open.spotify.com/embed/album/2jd8rOqwKGVmLsPSnuf5lo?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</section>
`;


const videoContent = `
<section id="videos-page">
  <div class="recent-videos">
    <iframe src="https://www.youtube.com/embed/mBjkdhyx3io?si=gXKuday5ddowfWJ-" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
  </div>
  <div class="videos-list">
    <iframe src="https://www.youtube.com/embed/aTPvGGAAvZ0?si=HBgubjCwYGFvHBrX" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/Q8VTeM4prlc?si=sl4s237s1QOM_PI7" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/xLZNM9hm5CI?si=RKWud_RQcgR5_iye" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/f7P0KI6fhdA?si=C65lh34VamibJAGi" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/LGK3jEwjR4s?si=dbO1-WuZuptHoOBX" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/5mKc0Pte3Q0?si=vE3ylUkT_YHi5VAr" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/Z1DiiT0WrWA?si=JaS2HyOv_Gw1r1RC" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/3dU7lI46qWY?si=JBiENfNg0zDJkdx2" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/qsofVVozzfo?si=aeG1L9fsCXfHCkR4" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/wIkidzxHGxk?si=3hh23RrHCu7-brHD" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/k4FhCJx7dD8?si=gcBxyNTs6GckIfoC" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/0G-LPtIa8R0?si=wn6nweJcM8xdxMUg" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/tVrRdWtIVfI?si=qDChtEJRkozv18u5" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/8rf8KhWbAD8?si=Z2xh_2phsyNRzm4k" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/hUNL2G49Z9Q?si=VNF-0EFC4DPcuriW" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    <iframe src="https://www.youtube.com/embed/2RBqTnkK4wY?si=GiOtbZp4Ruz4j2mq" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
  </div>
</section>
`;


const homeContent = `
<section id="home-page">
<img src="./assets/images/webp/zdj2.webp" alt="zdj-start" class="content_photo"/>
<img src="./assets/images/webp/zdj1.webp" alt="zdj-start" class="content_photo"/>
<img src="./assets/images/webp/zdj3.webp" alt="zdj-start" class="content_photo"/>
</section>`;

const liveContent = `
<section id="live-page">
  <img src="./assets/images/webp/wosp.webp" alt="zdj-wosp" class="content_photo" loading="lazy"/>
  <h2>Chcesz żebyśmy zagrali na Twoim evencie?</h2>
  <h3>Napisz do nas!</h3>
  <h4>panaceumofficial@gmail.com</h4>
  <p>
    Od zawsze uwielbiamy dzielić się swoją muzyką, a zagranie pierwszego koncertu było dla nas przez długi czas marzeniem. A potem okazało się, że jesteśmy w tym całkiem nieźli :)
  </p>
  <strong style="color:orangered">Ta sekcja będzie rozwinięta, póki co zapraszamy 25.07.2024 do baru Chicago w Krakowie</strong>
</section>
`;

const societyContent = `
<section id="society-page" style="text-align:right">
  <h2>Społeczność Panaceum</h2>
  <h4>Nasze linki (albo kliknij powyżej)</h4>
  <p>Facebook: <a href="https://facebook.com/panaceumofficial" target="_blank">facebook.com/panaceumofficial</a></p>
  <p>Instagram: <a href="https://instagram.com/panaceumofficial" target="_blank">instagram.com/panaceumofficial</a></p>
  <p>TikTok: <a href="https://tiktok.com/@panaceum_32400" target="_blank">tiktok.com/@panaceum_32400</a></p>
  <p>To żaden fanpage, dołącz i wpadnij czasem pogadać</p>
  <h4>Biznesy</h4>
  <p>Email: <strong>panaceumofficial@gmail.com</strong></p>
</section>`;

function navigateTo(view) {
  const contentMap = {
    panaceum: panaceumContent,
    music: musicContent,
    videos: videoContent,
    live: liveContent,
    society: societyContent,
    home: homeContent,
  };

  // Usuń klasę "active" z poprzedniego aktywnego elementu
  const activeElement = document.querySelector(".page--nav li.active");
  if (activeElement) {
    activeElement.classList.remove("active");
  }

  // Ustaw klasę "active" dla aktualnego elementu
  const currentElement = document.querySelector(
    `[data-navigate="${view}"]`
  ).parentNode;
  currentElement.classList.add("active");

  renderContent(contentMap[view]);

  let homeLink = document.getElementById("homeLink");
  homeLink.style.display = view === "home" ? "none" : "inline";
}

document.addEventListener("DOMContentLoaded", function () {
  navigateTo("home");

  document.querySelectorAll("a[data-navigate]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const view = this.getAttribute("data-navigate");
      navigateTo(view);
    });
  });
});
