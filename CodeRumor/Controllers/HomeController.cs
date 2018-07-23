using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CodeRumor.Models;

namespace CodeRumor.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult HomeMain()
        {
            NavigationIndicator home = new NavigationIndicator();
            return View(home); //passing an object that will active a class called active.
        }
    
    }
}
