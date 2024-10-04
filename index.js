// Simulated data structure for folders and images
const folderData = {
  capes: ["excursion_cape.gif", "farplane_cape_pixel.png", "farplane_cape.gif"],
  logos: [
    "discordlogo.jpg",
    "exearthorange.gif",
    "farplane2023discordlogo.gif",
    "farplane2023logov1.png",
    "farplane2023logovariant.png",
    "logodiscordhalloween.gif",
    "farplanelogoblank.png",
    "farplanecoollogo.png",
  ],
  messages: [
    "discord2.gif",
    "discordheader-Recovered-1.gif",
    "discordheader-Recovered.gif",
    "farplane2023threadinfo2.jpg",
    "forumthread.gif",
    "info1.gif",
  ],
  recaps: [
    "20202.gif",
    "ezgif.com-optimize.gif",
    "recapgif.gif",
    "signatures2020-2023.gif",
  ],
  signatures: [
    "farplane2020.gif",
    "signature2.gif",
    "halloweensignature.gif",
    "farplane2021.gif",
    "farplane2022signature.gif",
    "farplane2023signature.gif",
  ],
  stickers: [
    "Fluid.png",
    "FluidFanfare.png",
    "FluidFetus.png",
    "FluidPassive.png",
    "FluidTryhard.png",
    "Kabocha.png",
    "KabochaAttack.png",
    "KabochaDrunk.png",
    "KabochaHug.png",
    "KabochaTpose.png",
    "Kami.png",
    "KamiBolt.png",
    "KamiGlance.png",
    "KamiSip.png",
    "KamiYeah.png",
    "Kumo.png",
    "KumoBicep.png",
    "KumoCoin.png",
    "KumoJump.png",
    "KumoStretch.png",
    "KumoTune.png",
    "Redd.png",
    "ReddBalloon.png",
    "ReddCoin.png",
    "ReddGraduate.png",
    "ReddKumo.png",
    "ReddLetter.png",
    "ReddMyPrecious.png",
    "Yang.png",
    "YangCaffeine.png",
    "YangCoin.png",
    "YangHypno.png",
    "YangMelt.png",
    "YangScore.png",
    "Yin.png",
    "YinCoin.png",
    "YinPlane.png",
    "YinAtlas.png",
    "YinToot.png",
    "YinWave.png",
  ],
  uniforms: [
    "mailmanbuke.png",
    "mailmanbushi.png",
    "mailmanresident.png",
    "mailmanshogun.png",
    "mailmanyako.png",
  ],
};

// Get the gallery container
const gallery = document.getElementById("gallery");

// Loop through the folder data
for (const folder in folderData) {
  // Create a section for each folder
  const folderDiv = document.createElement("div");
  folderDiv.classList.add("folder");

  // Create a heading for the folder
  const folderTitle = document.createElement("h2");
  folderTitle.textContent = folder;
  folderDiv.appendChild(folderTitle);

  // Loop through the images in the folder
  folderData[folder].forEach(function (src) {
    const img = document.createElement("img");
    img.src = folder + "/" + src;
    img.alt = folder + "/" + src;
    img.style.borderBlock;
    folderDiv.appendChild(img);
  });

  // Append the folder section to the gallery
  gallery.appendChild(folderDiv);
}
