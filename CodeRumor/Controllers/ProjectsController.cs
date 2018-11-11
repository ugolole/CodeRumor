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
        private readonly NavigationIndicator active = new NavigationIndicator();
        
        //Go to main page
        public IActionResult ProjectsMain()
        {
            return View(active);
        }

        //return the intro partial view
        public IActionResult Intro()
        {
            return PartialView("/Views/Projects/_Intro.cshtml");
        }

        //return a partial view
        public ActionResult ThreeJs()
        {
            return PartialView("/Views/Projects/WebAnimations/ThreeJs/_ThreeJs.cshtml");
        }

        //return a partial view for p5js
        public IActionResult P5Js()
        {
            return PartialView("/Views/Projects/WebAnimations/P5Js/_P5JS.cshtml");
        }

        public IActionResult Test()
        {
            return PartialView("/Views/Projects/WebAnimations/ThreeJs/_TestFile.cshtml");
        }

        
    }
}