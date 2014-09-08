namespace ECsRestaurantMenu.Data.Migrations
{
    using ECsRestaurantMenu.Data.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ECsRestaurantMenu.Data.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ECsRestaurantMenu.Data.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            MenuItem Brisket = new MenuItem("Brisket", "$5.99", "http://ericcarraway.com/data/food/Brisket.png");
            MenuItem Burgers = new MenuItem("Burgers", "$3.50", "http://ericcarraway.com/data/food/Burgers.png");
            MenuItem Chocolate = new MenuItem("Chocolate", "$2.00", "http://ericcarraway.com/data/food/Chocolate.png");

            context.MenuItems.AddOrUpdate(m => m.Name,
            Brisket,
            Burgers,
            Chocolate
            );

            context.SaveChanges();
        }
    }
}