AFRAME.registerComponent('rotate', {
    schema:{moveY: {type:'number', default: 1}},
    tick: function(){
        window.addEventListener('click', (m) =>{
            this.data.moveY = this.data.moveY + 0.05
        })
        var r = this.el.getAttribute("rotation")
        r.y = this.data.moveY
        this.el.setAttribute("rotation", {
            x: r.x, 
            y: r.y, 
            z: r.z
        })
    }
})
