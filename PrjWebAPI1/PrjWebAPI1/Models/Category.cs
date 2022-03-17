using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

#nullable disable

namespace PrjWebAPI1.Models
{ 
    [DataContract]
    public partial class Category
    {
        public Category()
        {
            Products = new HashSet<Product>();
        }

    [DataMember]
        public int CategoryId { get; set; }
        [DataMember]
        public string CategoryName { get; set; }
        [DataMember]
        public string Description { get; set; }
        [DataMember]
        public byte[] Picture { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
