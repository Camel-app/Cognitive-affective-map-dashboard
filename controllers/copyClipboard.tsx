// Date: 2021/09/02
/**
 * This function copies the link to the clipboard
 * @param element 
 * @param link
 */
export default function copyToClipboard(element, link) {
    const url = "https://camgalaxy.github.io?link=" + link + "/participants/getOneExperiment?id=" + element + "&participantID="
    navigator.clipboard.writeText(url);
}