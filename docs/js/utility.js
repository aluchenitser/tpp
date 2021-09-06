/**
 * Native scrollTo with callback
 * @param offset - offset to scroll to
 * @param callback - callback function
 */
 function scroller(offset, callback) {
    const fixedOffset = offset.toFixed();
    const onScroll = function () {
        const wFixed = window.pageYOffset.toFixed()

        if (fixedOffset - 3 <= wFixed && wFixed <= fixedOffset + 3) {
            window.removeEventListener('scroll', onScroll)
            callback()
        }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    })
}