FROM python:3.10-alpine

WORKDIR /app

WORKDIR /app/server

RUN apk add --no-cache gcc musl-dev linux-headers

COPY ./requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
