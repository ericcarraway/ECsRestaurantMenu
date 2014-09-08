using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECsRestaurantMenu.Data.Models
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string PicUrl { get; set; }
        public MenuItem() { }
        public MenuItem(string name, string price, string picUrl)
        {
            Name = name;
            Price = price;
            PicUrl = picUrl;
        }
    }
}
