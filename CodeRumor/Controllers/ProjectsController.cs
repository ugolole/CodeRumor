using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CodeRumor.Models;
namespace CodeRumor.Controllers
{
    public class ProjectsController : Controller
    {
        NavigationIndicator active = new NavigationIndicator();
        
        //Go to main page
        public IActionResult ProjectsMain()
        {
            return View(active);
        }

        //open up java script based projects
        public IActionResult JavaScript()
        {
            return View(active);
        }

        //open up the growing tree example
        public IActionResult JSGrowingTree()
        {
            return View(active);
        }
    }
}