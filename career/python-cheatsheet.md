# Python CheatSheet

_Updated at: 2022-07-26_

## Eval string to list 
https://docs.python.org/3.7/library/ast.html
```python
import ast

l = ast.literal_eval("['a', 'b', 'c']")
print(type(l))
# <class: list>
```

## Multi Thread
https://myapollo.com.tw/zh-tw/python-multiprocessing/


## Async

### Async in API Server
```python
import asyncio
from typing import List

async def func1():
    pass

async def func2():
    pass

loop = asyncio.new_event_loop()
asyncio.set_event_loop(loop)
tasks = [
    func1(),
    func2()
]
rets: List = loop.run_until_complete(
    asyncio.gather(*tasks)
)

loop.close()
```

### Async in Jupyter
```python
# define async func in a cell
async def func1():
    pass

# execute directly in another cell
await func1()
```

### Aiohttp

```python
import asyncio
import time
from functools import partial

import aiohttp


async def fetch(session, url, query):
    async with session.get(url, params={'query': query}) as response:
        if response.status != 200:
            response.raise_for_status()
        data = await response.json()
    return data


async def fetch_all(event_loop, url, queries):
    async with aiohttp.ClientSession(loop=event_loop) as session:
        results = await asyncio.gather(*[fetch(session, url, q) for q in queries],
                                       return_exceptions=True)
        return results


# execute this example in another jupyter cell
loop = asyncio.get_event_loop()
func = partial(fetch_all, loop, )

inputs, outputs = ['a', 'b', 'c', ..., 'z'], []
batch_size = 5
for i in range((len(inputs) // batch_size) + 1):
    _from, _to = i * batch_size, (i + 1) * batch_size
    batch = inputs[_from:_to]
    o = await loop.create_task(
        fetch_all(loop, 'http://example.com/api', batch))
    outputs.extend(o)
    time.sleep(3)
```