using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CodeRumor.Models;

namespace CodeRumor.Controllers
{
    public class TermsOfServiceController : Controller
    {
        public IActionResult TermsOfServiceMain()
        {
            NavigationIndicator active = new NavigationIndicator();

            return View(active);
        }
    }
}