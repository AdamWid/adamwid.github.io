function loadPage(file) {
    window.location.href = file;
}



function Init()
{
    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; ++i)
    {
        let slide = slides.item(i);
        let children = slide.getElementsByClassName("slide");
    
        for (let i = 0; i < children.length; ++i)
        {
            let child = children[i];
            if (i == 0)
            {
                child.classList.add("active");
            }
        }
    }
}

function findAncestor (el, sel) {
    while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
    return el;
}

function mod(n, m) {
    return ((n % m) + m) % m;
  }

function nextSlide(button, count)
{
    
    children = findAncestor(button, ".slides").getElementsByClassName("slide");

    if (children.length == 0)
        return;

    next = 0;
    for (i = 0; i < children.length; ++i)
    {
        child = children[i];
        if (child.classList.contains("active"))
        {
            next = mod(i+count, children.length);
            child.classList.remove("active");
            break;
        }
    }
    
    child = children[next];
    child.classList.add("active");
}