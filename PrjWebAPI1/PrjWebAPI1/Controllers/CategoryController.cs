using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PrjWebAPI1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrjWebAPI1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        private readonly NorthwindContext db;

        public CategoryController(NorthwindContext context)
        {
            db= context;
        }

        [HttpGet]
       // [Route("displaycat")]
        public IActionResult Get()
        {
            
           var cat= db.Categories.ToList();

            if(cat != null)
            {
                return Ok(cat);
            }
           else
            {
                return NotFound("data not found");
            }

        }

        [HttpGet("{id}")]
        public IActionResult GetCategory(int id)
        {
            var category = db.Categories.Find(id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }


     
        #region Post
        [HttpPost]
    //    [Route("addcategory")]
        public IActionResult AddCategory([FromBody]Category category)
        {
            try
            {
                if(category ==null)
                {
                    return BadRequest("Category is null");
                }

                else
                {
                    db.Categories.Add(category);
                    db.SaveChanges();
                    return Ok("Success");
                }
            }

            catch(Exception e)
            {
                return Ok("Some Error Occured!!!");
            }
           
        }
        #endregion

        #region Delete

        [HttpDelete("{id}")]
        public IActionResult Deletebyid(int? id)
        {
            try
            {


                var category = db.Categories.Find(id);
                if (category != null)
                {
                    db.Categories.Remove(category);
                    db.SaveChanges();
                    return Ok("Recored Deleted!!!");

                }
                else
                {
                    return NotFound("No Data Found!!");
                }
            }

            catch (Exception e)
            {
                return Ok("Please try Again!!!");
            }

        }
        #endregion

        #region Edit
        [HttpPut("{id}")]
        public IActionResult Edit(int? id,[FromBody]Category category)
        {
            try
            {
                if (id != category.CategoryId)
                {
                    return BadRequest();
                }
               
                else
                {
                    db.Entry(category).State = EntityState.Modified;
                    db.SaveChanges();
                    return Ok("record updated!!!");
                }

            }
            catch(Exception e)
            {
                return BadRequest(e);
            }

        }
        #endregion
    }
}
