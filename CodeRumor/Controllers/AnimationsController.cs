using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CodeRumor.Controllers
{
    public class AnimationsController : Controller
    {
        public IActionResult AnimationMain()
        {
            return View();
        }

        public IActionResult GrowingTree()
        {
            return View();
        }
    }
}