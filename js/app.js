function renderContent(content) {
  document.getElementById("app").innerHTML = content;
}

const panaceumContent = `
<section id="panaceum-page">

  <a href="https://www.facebook.com/share/MPUGVQ3jf5fNMTkd/">
    <img src="./assets/images/webp/koncert.webp" alt="koncert" style="width: 100%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=PLgn-GLCkY0hl8JgWX5Y2dMHGT805_4dzY&si=czeV4kOmq8SZUM2Y" >
    <img src="./assets/images/webp/cds/cerber.webp" alt="cerber" style="width: 45%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=PLgn-GLCkY0hmlpXn73DzgqN_-10rf3f7W&si=AGCHI1j7weHUzYCT">
    <img src="./assets/images/webp/cds/cwiercwiekupoezji.webp" alt="cwiercwiekupoezji" style="width: 45%" loading="lazy">
  </a>
  <a href="https://youtube.com/playlist?list=OLAK5uy_lYCTgS5opF_poplANBC9upvSmj-oEsXY0&si=z0TS3UIidmZx3uYt">
    <img src="./assets/images/webp/cds/spacerynoca.webp" alt="spacerynoca" style="width: 45%" loading="lazy">
  </a>
  <a href="https://www.youtube.com/watch?v=w51cm40474M&t=7s">
    <img src="./assets/images/webp/cds/sprawdztenmixtape.webp" alt="sprawdztenmixtape" style="width: 45%" loading="lazy">
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
  <strong style="color:orangered">Ta sekcja będzie rozwinięta, póki co zapraszamy 25.07.2024 do Chicago Bar w Krakowie</strong>
</section>
`;

const societyContent = `
<section id="society-page" style="text-align:right">
  <h2>Społeczność Panaceum</h2>
  <h4>Nasze linki (albo kliknij powyżej)</h4>
  <p>Facebook: <a href="https://facebook.com/panaceumofficial" target="_blank">facebook.com/panaceumofficial</a></p>
  <p>Instagram: <a href="https://instagram.com/panaceumofficial" target="_blank">instagram.com/panaceumofficial</a></p>
  <p>TikTok: <a href="https://tiktok.com/@panaceum_32400" target="_blank">tiktok.com/@panaceum_32400</a></p>
  <h4>Biznesy</h4>
  <p>Email: <strong>panaceumofficial@gmail.com</strong></p>
</section>`;

async function fetchVideoContent() {
  const githubUrl = 'https://raw.githubusercontent.com/maciekkusiak27/pm-web-content/main/videos.json';
  const localUrl = './assets/data/videos.json';

  async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  function createVideoContent(videoData) {
    let recentVideo = `<iframe src="${videoData.recentVideo}" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>`;
    let videoList = videoData.videoList.map(url => `
      <iframe src="${url}" title="YouTube video player" allowfullscreen="" loading="lazy"></iframe>
    `).join('');

    return `
      <section id="videos-page">
        <div class="recent-videos">${recentVideo}</div>
        <div class="videos-list">${videoList}</div>
      </section>
    `;
  }

  try {
    const videoData = await fetchJson(githubUrl);
    return createVideoContent(videoData);
  } catch (error) {
    console.warn('Failed to fetch from GitHub, trying local:', error);
    try {
      const videoData = await fetchJson(localUrl);
      return createVideoContent(videoData);
    } catch (localError) {
      console.error('Failed to fetch local video content:', localError);
      return `<section id="videos-page"><p>Error loading videos. Please try again later.</p></section>`;
    }
  }
}

async function fetchMusicContent() {
  const githubUrl = 'https://raw.githubusercontent.com/maciekkusiak27/pm-web-content/main/music.json';
  const localUrl = './assets/data/music.json';

  async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  function createMusicContent(musicData) {
    let tracks = musicData.tracks.map(url => `
      <iframe src="${url}" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `).join('');

    return `
      <section id="music-page">
        ${tracks}
      </section>
    `;
  }

  try {
    const musicData = await fetchJson(githubUrl);
    return createMusicContent(musicData);
  } catch (error) {
    console.warn('Failed to fetch from GitHub, trying local:', error);
    try {
      const musicData = await fetchJson(localUrl);
      return createMusicContent(musicData);
    } catch (localError) {
      console.error('Failed to fetch local music content:', localError);
      return `<section id="music-page"><p>Error loading music. Please try again later.</p></section>`;
    }
  }
}

function navigateTo(view) {
  const contentMap = {
    panaceum: panaceumContent,
    home: homeContent,
    live: liveContent,
    society: societyContent,
  };

  const activeElement = document.querySelector(".page--nav li.active");
  if (activeElement) {
    activeElement.classList.remove("active");
  }

  const currentElement = document.querySelector(
    `[data-navigate="${view}"]`
  ).parentNode;
  currentElement.classList.add("active");

  if (view === 'videos') {
    fetchVideoContent().then(content => {
      renderContent(content);
    });
  } else if (view === 'music') {
    fetchMusicContent().then(content => {
      renderContent(content);
    });
  } else {
    renderContent(contentMap[view]);
  }

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