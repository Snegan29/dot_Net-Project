using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private static List<TodoItem> _todos = new List<TodoItem>
        {
            new TodoItem { Id = 1, Title = "Learn React", IsCompleted = false },
            new TodoItem { Id = 2, Title = "Learn .NET", IsCompleted = false }
        };
        private static int _nextId = 3;

        // GET: api/todo
        [HttpGet]
        public ActionResult<IEnumerable<TodoItem>> GetTodos()
        {
            return _todos;
        }

        // GET: api/todo/1
        [HttpGet("{id}")]
        public ActionResult<TodoItem> GetTodo(int id)
        {
            var todo = _todos.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            return todo;
        }

        // POST: api/todo
        [HttpPost]
        public ActionResult<TodoItem> PostTodo(TodoItem todoItem)
        {
            todoItem.Id = _nextId++;
            _todos.Add(todoItem);
            return CreatedAtAction(nameof(GetTodo), new { id = todoItem.Id }, todoItem);
        }

        // PUT: api/todo/1
        [HttpPut("{id}")]
        public IActionResult PutTodo(int id, TodoItem todoItem)
        {
            if (id != todoItem.Id)
            {
                return BadRequest();
            }

            var existingTodo = _todos.FirstOrDefault(t => t.Id == id);
            if (existingTodo == null)
            {
                return NotFound();
            }

            existingTodo.Title = todoItem.Title;
            existingTodo.IsCompleted = todoItem.IsCompleted;

            return NoContent();
        }

        // DELETE: api/todo/1
        [HttpDelete("{id}")]
        public IActionResult DeleteTodo(int id)
        {
            var todo = _todos.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }

            _todos.Remove(todo);
            return NoContent();
        }
    }
}