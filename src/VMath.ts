namespace VMath {
    function lerpf(start, end, amt) {
        return (1 - amt) * start + amt * end
    }
}