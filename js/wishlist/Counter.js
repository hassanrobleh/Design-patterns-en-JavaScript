
class WishListCounter {

    constructor() {
        this.$wishCount = document.querySelector('.wish-count')
        this.count = 0;

    }

    update(action) {
        if(action === 'INC') {
            this.count += 1
        } else if(action === 'DEC') {
            this.count -= 1
        } else {
            throw 'Unknown action'
        }

        this.$wishCount.innerHTML = this.count
    }

}

// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };

// const tt = new WishListCounter()
// tt.addWishList()