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

        //return the intro partial view
        public IActionResult Intro()
        {
            return PartialView("/Views/Projects/_Intro.cshtml");
        }

        //return a partial view
        public ActionResult ThreeJs()
        {
            return PartialView("/Views/Projects/WebAnimations/_ThreeJs.cshtml");
        }

        //return a partial view for p5js
        public IActionResult P5Js()
        {
            return PartialView("/Views/Projects/WebAnimations/_P5JS.cshtml");
        }

        
    }
}