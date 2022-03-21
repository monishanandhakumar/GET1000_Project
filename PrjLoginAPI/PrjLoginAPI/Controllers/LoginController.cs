using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PrjLoginAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrjLoginAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly SampleContext db;
        public LoginController(SampleContext context)
        {
            db = context;
        }
        [HttpPost]
        public IActionResult Post(Employee logininfo)
        {
           
            var tempUser = db.Employees.Where(u => (u.Mobile == logininfo.Mobile &&
            u.Password == logininfo.Password)).Select(x => x).FirstOrDefault();

           
            if (tempUser != null)
            {
                return Ok(tempUser);
            }
            else
            {
                string msg = "Invalid";
                return BadRequest();
            }
        }
    }
}
