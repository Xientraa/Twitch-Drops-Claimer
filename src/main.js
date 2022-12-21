// ==UserScript==
// @name         Twitch Drops Claimer
// @namespace    https://github.com/Xientraa/Twitch-Drops-Claimer
// @version      1.0.0
// @description  Automatically claim Twitch drops.
// @author       Xientra
// @match        https://www.twitch.tv/drops/inventory*
// @icon         https://static.twitchcdn.net/assets/favicon-16-52e571ffea063af7a7f4.png
// @homepage     https://github.com/Xientraa/Twitch-Drops-Claimer
// @homepageURL  https://github.com/Xientraa/Twitch-Drops-Claimer
// @supportURL   https://github.com/Xientraa/Twitch-Drops-Claimer/issues
// ==/UserScript==

const observer = new MutationObserver(() => {
    document
        .querySelectorAll('button[data-test-selector="DropsCampaignInProgressRewardPresentation-claim-button"]')
        .forEach((button) => {
            button.click();
        });
});

observer.observe(document, { childList: true, subtree: true });

setInterval(() => {
    document.location.reload();
}, 60000);
