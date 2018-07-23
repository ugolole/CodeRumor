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
        
        public IActionResult ProjectsMain()
        {
            return View(active);
        }

        public IActionResult JavaScript()
        {
            return View(active);
        }

        public IActionResult JSGrowingTree()
        {
            return View(active);
        }
    }
}