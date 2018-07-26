using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CodeRumor.Models;

namespace CodeRumor.Controllers
{
    public class DocumentationController : Controller
    {
        public IActionResult DocumentationMain()
        {
            NavigationIndicator active = new NavigationIndicator();
            return View(active);
        }

        public IActionResult DocCsharp()
        {
            NavigationIndicator active = new NavigationIndicator();
            return View(active);
        }
    }
}