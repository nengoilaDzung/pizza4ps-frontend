import React from "react";

const Pizza = () => {
  return (
    <div className="menuItemList">
      <div className="menulist">
        <ul>
          <li>
            <a href="#sign">Signature</a>
            <span>/</span>
          </li>
          <li>
            <a href="#classic-ita">Classic Italian</a>
            <span>/</span>
          </li>
          <li>
            <a href="#org-cheese">Original Cheese</a>
            <span>/</span>
          </li>
          <li>
            <a href="#org">Original</a>
            <span>/</span>
          </li>
          <li>
            <a href="#veg">Vegetarian</a>
            <span>/</span>
          </li>
          <li>
            <a href="#org-dessert">Original Dessert</a>
            <span>/</span>
          </li>
        </ul>
      </div>
      <div className="menuItem-content">
        <p style={{ marginTop: "-100px", paddingTop: "100px" }} id="sign"></p>
        <h3>Signature</h3>
        <ul className="item-list">
          <li style={{ height: "390px" }}>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/03/img_pizza1.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Burrata Parma Ham</span>
          </li>
          <li style={{ height: "390px" }}>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/03/img_pizza3.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Burrata Parma Ham Margherita</span>
          </li>
          <li style={{ height: "390px" }}>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/03/img_pizza2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Burrata Anchovy Tomato</span>
          </li>
        </ul>
        <p style={{ marginTop: "-100px", paddingTop: "100px" }} id="classic-ita"></p>
        <h3>Classic Italian</h3>
        <ul className="item-list">
          <li style={{ height: "390px" }}>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/italian_margherita2.png&h=300&w=300&zc=1"
              alt=""
            />
            <span>Margherita</span>
          </li>
          <li style={{ height: "390px" }}>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/italian_parma3.png&h=300&w=300&zc=1"
              alt=""
            />
            <span>Parma Ham Margherita</span>
          </li>
          <li style={{ height: "390px" }}>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/03/img_pizza2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Burrata Anchovy Tomato</span>
          </li>
        </ul>
        <p style={{ marginTop: "-50px", paddingTop: "50px" }} id="org-cheese"></p>
        <h3>Original Cheese</h3>
        <ul className="item-list">
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/cheese2.png&h=300&w=300&zc=1"
              alt=""
            />
            <span>House-made Cheese</span>
          </li>
        </ul>
        <p style={{ marginTop: "-100px", paddingTop: "100px" }} id="org"></p>
        <h3>Original</h3>
        <ul className="item-list">
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_sashimi2.png&h=300&w=300&zc=1"
              alt=""
            />
            <span>Salmon Sashimi</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_miso2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Salmon Miso Cream</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_seafood-spicy2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Smoked Cheese Seafood Spicy Tomato Sauce</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_teriyaki-1.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Teriyaki Chicken</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_tandoori-chicken-1.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Tandoori Chicken Curry</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_ginger-1.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Japanese Ginger Pork</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_camembert2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Camembert &amp; Ham Mushroom Sauce</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_calamari-seaweed2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Calamari Seaweed</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_beef2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Soy Garlic Beef</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/original_shrimp-mayonaise2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Shrimp Mayonaise</span>
          </li>
        </ul>
        <p style={{ marginTop: "-100px", paddingTop: "100px" }} id="veg"></p>
        <h3>Vegetarian</h3>
        <ul className="item-list">
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/veg_flower.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Four Flowers</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/veg_eggplants.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Eggplants Margherita</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/veg_zucchini.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Zucchini Basil Sauce</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/veg_mushroom.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Mushroom pizza</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/cheese2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>House-made Cheese</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/italian_margherita2.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Margherita</span>
          </li>
        </ul>
        <p style={{ marginTop: "-100px", paddingTop: "100px" }} id="org-dessert"></p>
        <h3>Original Dessert</h3>
        <ul className="item-list">
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/Affogato.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Affogato Pizza (Vanilla Ice-cream with Espresso coffee)</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/dessert_apple.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Apple &amp; Vanilla Ice-cream Pizza</span>
          </li>
          <li>
            <img
              src="https://pizza4ps.com/admin/wp-content/themes/wp-templ/timthumb/timthumb.php?src=/admin/wp-content/uploads/2017/04/dessert_raspberry.png&amp;h=300&amp;w=300&amp;zc=1"
              alt=""
            />
            <span>Raspberry &amp; Vanilla Ice-cream Pizza</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pizza;
