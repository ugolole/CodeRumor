using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CodeRumor.Models;
namespace CodeRumor.Controllers
{
    public class ContactController : Controller
    {
        private readonly NavigationIndicator active = new NavigationIndicator();
        public IActionResult ContactMain()
        {
            return View(active);
        }
    }
}